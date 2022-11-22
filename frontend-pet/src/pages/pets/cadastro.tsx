import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material';
import { NextPage } from 'next';
import Titulo from '../../ui/components/Titulo/Titulo';
import  useCadastro  from "../../data/hooks/pages/pets/useCadastro";


const Cadastro: NextPage = () => {
    const {
        name,
        historia,
        foto,
        setName,
        setHistoria,
        setFoto,
        cadastrar,
        mensagem,
        setMensagem
    } = useCadastro();
    return (
        <>
            <Titulo
                titulo={'Cadastro de Pets para Adoção'}
                subtitulo={'Preencha os dados do novo Pet'}
            />
            <Paper sx={{maxWidth:970, mx:'auto', p: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label={'Nome'}
                            placeholder={'Digite o nome do pet'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={historia}
                            onChange={(e) => setHistoria(e.target.value)}
                            label={'História do pet'}
                            multiline
                            fullWidth
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={foto}
                            onChange={(e) => setFoto(e.target.value)}
                            label={'Foto'}
                            placeholder={'Digite o endereço da imagem'}
                            fullWidth
                        />
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{mt: 2}}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target={'_blank'}
                        >
                            Enviar Imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button
                            onClick={cadastrar}
                            variant={'contained'}
                            fullWidth
                            sx={{maxWidth: {md:200}, mt: 4}}
                        >
                            Cadastrar Pet
                        </Button>

                    </Grid>
                </Grid>
            </Paper>
            <Snackbar 
                open={mensagem.length > 0}
                autoHideDuration={2500}
                onClose={() => setMensagem('')}
                message={mensagem}
            />
        </>
    )
}
export default Cadastro;