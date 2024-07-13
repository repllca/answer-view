import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import requests from './Requests';
import { Test } from '../../types';

const Sample: FC = () => {
  const [info, setInfo] = useState<Test[]>([]);

  useEffect(() => {
    const getSampleData = async () => {
      try {
        const res = await axios.get(requests.fetchSampleData);
        const fetchedData: Test[] = res.data.map((resData: Test) => ({
          id: resData.id,
          // 必要に応じて他のフィールドをアンコメントして追加
          // userId: resData["user_id"],
          // userName: resData["user_name"],
          // clubCode: resData["club_code"],
          // clubName: resData["club_name"],
        }));
        setInfo(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    getSampleData();
  }, []);

  return (
    <>
      {/* ここにTSX/JSXを記述します */}
    </>
  );
};

export default Sample;
