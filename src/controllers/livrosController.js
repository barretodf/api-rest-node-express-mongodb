import livros from "../models/livro.js";

class LivroController{
    //Metodo get    
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros)
    })
    }
    //Buscar livro por id metodo get
    static listarLivrosPorId = (req, res) => {
        const id = req.params.id;
        
        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
            if(err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado!`})
          } else {
            res.status(200).send(livros)
          }  
        })
    }
    //metodo post
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        
        livro.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastra Livro!`})  
            } else {
                res.status(201).send(livro.toJSON())
            }  
        })    
    }
    //metodo put
    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    
    //Método delete
    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    //Buscar livro pela editora
    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }  
}
export default LivroController;
