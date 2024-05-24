import React, { useState, useEffect } from 'react';
import { getKadaiList } from '../api/kadai_api';
import { Kadai } from '../types';
import KadaiProps from '../component/KadaiProps';

const KadaiBordView = () => {
    const [kadailist, setKadai] = useState<Kadai[]>([]);
  
    useEffect(() => {
        getKadaiList()
            .then((values: Kadai[]) => {
                setKadai(values);
            })
    }, []);

    return (
        <div>
            {kadailist.map((kadai ,index) => (
                <KadaiProps 
                    key={index}
                    title={kadai.title}
                    question={kadai.question}
                    answer={kadai.answer}
                    author={kadai.author}
                    question_id={kadai.question_id}
                />
            ))}
        </div>
    );
};

export default KadaiBordView;
