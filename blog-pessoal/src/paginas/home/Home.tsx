import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { TokenState } from "../../store/tokens/tokensReducer";
import "./Home.css";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
        <Grid alignItems="center" item xs={6}>
            <Box paddingX={20} >
                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
                <Box marginRight={1}>
                    <ModalPostagem />
                </Box>
                <Link to="/postagens" className="text-decorator-none">
                    <Button variant="outlined" className='botao'>Ver Postagens</Button>
                </Link>
            </Box>
        </Grid>
        <Grid item xs={6} >
            <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} className='postagens'>
            <TabPostagem />
        </Grid>
    </Grid>
</>
);
}

export default Home;