import React from "react";
import "./Projetos.css";
import ItemList from "../item-list/ItemList";

class Projetos extends React.Component {
  constructor() {
    super();
    this.state = {
      actualDir:
        "https://api.github.com/repos/nstseek/nstseek.github.io/contents",
      dirList: {
        empty: true,
        empty_element: (
          <div class="loader">
            <i class="fas fa-spinner fa-spin" />
            <h6>Carrregando...</h6>
          </div>
        )
      }
    };
  }

  onItemClick = obj => {
    if (obj.back === true) {
      if (
        this.state.actualDir ===
        "https://api.github.com/repos/nstseek/nstseek.github.io/contents"
      ) {
        return;
      } else {
        let url = this.state.actualDir;
        url = url.substr(0, url.lastIndexOf("/"));
        fetch(url)
          .then(response => response.json())
          .then(data =>
            this.setState({
              actualDir: url,
              dirList: data
            })
          );
      }
    } else if (obj.type === "dir") {
      fetch(obj.url)
        .then(response => response.json())
        .then(data =>
          this.setState({
            actualDir: obj.url,
            dirList: data
          })
        );
    } else if (obj.type === "file") {
      window.open(obj.html_url);
    }
  };

  render() {
    console.log(this.state.actualDir);

    return (
      <div id="projetosContainer">
        <div id="projetosTitle">
          <h1>Meu repositório no GitHub</h1>
          <h6>
            Leia o{" "}
            <a
              class="linkGit"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nstseek/nstseek.github.io/blob/master/README.md"
            >
              README.md
            </a>{" "}
            para mais detalhes
          </h6>
          <h6>
            (Você também pode visualizar meu repositório em{" "}
            <a
              class="linkGit"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nstseek/nstseek.github.io"
            >
              https://github.com/nstseek/nstseek.github.io
            </a>
            )
          </h6>
        </div>
        <div id="projetosContent">
          <ItemList clickFunc={this.onItemClick} dir={this.state.dirList} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(this.state.actualDir)
      .then(response => response.json())
      .then(data =>
        this.setState({
          dirList: data
        })
      );
  }
}

export default Projetos;
