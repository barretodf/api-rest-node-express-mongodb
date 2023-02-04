import autores from "../models/Autor.js";

class AutorController{
    //Metodo get    
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
    })
    }
    //metodo post
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        
        autor.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastra Autor!`})  
            } else {
                res.status(201).send(autor.toJSON())
            }  
        })    
    }
    //metodo put
    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor atualizado com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    //Buscar Autor por id metodo get
    static listarAutoresPorId = (req, res) => {
        const id = req.params.id;
        
        autores.findById(id, (err, autores) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Id do Autor não localizado!`})
          } else {
            res.status(200).send(autores)
          }  
        })
    }
    //Método delete
    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor removido com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}
export default AutorController;
