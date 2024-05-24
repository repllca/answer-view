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
           {kadailist.map((kadai) => (
            <KadaiProps kadai = {kadai.kadai}/>
           ))}
        </div>
    );
};

export default KadaiBordView;