/*
pegarPlaylists = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "leticia-chijo"
        }
      }
    );

    request
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        console.log("Ocorreu um erro");
      });
  };
*/