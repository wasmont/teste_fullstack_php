<?php 

namespace App\Repositories;

use App\Models\ProdutoModel;
class ProdutoRepository {
    protected $produto;

    public function __construct(ProdutoModel $produto){
        $this->produto = $produto;
    }
    public function save($data){

        $model = new $this->produto;

        $model->nome = $data['nome'];
        $model->descricao = $data['descricao'];
        $model->tensao = $data['tensao'];
        $model->marca_id = $data['marca_id'];

        $model->save();

        return $model->fresh();
    }
}

