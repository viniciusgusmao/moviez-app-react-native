import React, { useState, useEffect } from 'react';
import api from '../config/axios';
import config from '../res/config';
import { IBigCard, ISmallCard } from '../interfaces';

const { api_key } = config;

const useFetchApi = (url1: string, url2: string) => {
  const [queryHighlight, setQueryHighlight] = useState<IBigCard[]>([]);
  const [errorQueryHighlight, setErrorQueryHighlight] = useState('');
  const [querySecondary, setQuerySecondary] = useState<ISmallCard[]>([]);
  const [errorQuerySecondary, setErrorQuerySecondary] = useState('');
  
  useEffect(() => {
    api.get(url1, {
      params: {
        page: 1,
        api_key
      }
    }).then((res: any) => {
      setQueryHighlight(res.data.results);
    }).catch((error: any) => {
      setErrorQueryHighlight('Erro ao consultar os dados');
      console.log(error);
    })
  }, [])

  useEffect(() => {
    api.get(url2, {
      params: {
        page: 1,
        api_key
      }
    }).then((res: any) => {
      setQuerySecondary(res.data.results);
    }).catch((error: any) => {
      setErrorQuerySecondary('Erro ao consultar os dados');
    })
  }, [])

  return { queryHighlight, errorQueryHighlight, querySecondary, errorQuerySecondary };
}

export default useFetchApi;