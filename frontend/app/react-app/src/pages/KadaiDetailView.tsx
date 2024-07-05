import React, { useState, useEffect } from 'react';
import KadaiDetail from '../component/KadaiDetail';
import RegistarForm from '../component/RegistarForm';
import { Header } from '../component/Header';
import { useParams } from 'react-router-dom';
import { getKadaiDetail } from '../api/kadai_api';

const KadaiDetailView: React.FC = () => {
    const {id} = useParams <{id : number}>();
    
    const [isOpen, setIsOpen] = useState(false);
    const onToggle = () => {
        setIsOpen(!isOpen);
      };
    useEffect(() => {
        getKadaiDetail({id})
            .then((values: Kadailist) => {
                setKadai(values);
                console.log(values.results)
                nitanilist = values.results
                console.log(nitanilist)
            })
    }, []);
  return (
    <div>
      <Header/>
        <KadaiDetail
          username = ""
          password1 =""
          password2 =""
          email =""
          school_name =""
        />
    </div>
  );
};

export default KadaiDetailView;