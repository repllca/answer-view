import React, { useState, useEffect } from 'react';
import KadaiDetail from '../component/KadaiDetail';
import RegistarForm from '../component/RegistarForm';
import { Header } from '../component/Header';
import { useParams } from 'react-router-dom';
import { getKadaiDetail } from '../api/kadai_api';
import { Kadai } from '../types'; // Kadai型をインポート

const KadaiDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // URLパラメータを取得

  const [kadai, setKadai] = useState<Kadai | null>(null); // 課題データの状態管理
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (id) {
      getKadaiDetail(Number(id)) // idを数値型に変換して渡す
        .then((values: Kadai) => {
          setKadai(values);
          console.log(values);
        })
        .catch((error) => {
          console.error("Error fetching Kadai detail:", error);
        });
    }
  }, [id]); // idが変更されたときに再度実行

  return (
    <div>
      <Header />
      {kadai ? (
        <KadaiDetail
          answer={kadai.answer}
          title={kadai.title}
          description={kadai.description}
          date={kadai.date}
          owner={kadai.owner}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default KadaiDetailView;
