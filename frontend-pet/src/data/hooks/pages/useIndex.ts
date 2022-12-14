import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex(){
    const [listaPets, setListaPets] = useState<Pet[]>([]),
          [ petSelecionado, setPetSelecioado ] = useState<Pet | null>(null),
          [email, setEmail] = useState(''),
          [valor, setValor] = useState(''),
          [mensagem, setMensagem] = useState('');

    useEffect(()=>{
      ApiService.get('/pets')
        .then((resposta) => {
          setListaPets(resposta.data);
        })        
    }, [])

    function adotar(){
      if(petSelecionado!== null){
        if(validarDadosAdocao()){
          ApiService.post('/adocoes', {
            pet_id:petSelecionado.id,
            email,
            valor
          })
          .then(() => {
            setPetSelecioado(null);
            setMensagem('Pet adotado com sucesso!');
            limparFormulario();
          })
          .catch((error: AxiosError) => {
            setMensagem(error.response?.data.message);''
          })
        }else {
          setMensagem('Preencha os campos corretamente!')
        }
      }
    }

    function validarDadosAdocao(){
      return email.length > 0 && valor.length > 0;
    }

    function limparFormulario(){
      setEmail('');
      setValor('');
    }

    return {
        listaPets,
        petSelecionado,
        setPetSelecioado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar,



    };
}