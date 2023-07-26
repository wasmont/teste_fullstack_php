<?php 

namespace App\Repositories;

use App\Models\ProdutoModel;
use Illuminate\Support\Facades\DB;

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
    public function update($data){

        $model = $this->produto::find($data['id']);

        $model->nome = $data['nome'];
        $model->descricao = $data['descricao'];
        $model->tensao = $data['tensao'];
        $model->marca_id = $data['marca_id'];

        $model->save();

        return $model->fresh();
    }
    public function delete($id){
        $resultado = $this->produto->where('id', $id)->delete();
        return ($resultado == 1) ? true : false;
    }
    
    public function getProduto($id){

        if(!empty($id)) {
            
            $resultado = $this->produto::find($id)
            ->leftJoin('marca', 'marca_id', '=', 'marca.id')
            ->select('produto.id','produto.nome','produto.descricao','produto.tensao','marca.id as marca_id','marca.nome as marca')
            ->firstOrFail();

        } else {
            
            $resultado = DB::table('produto')
            ->leftJoin('marca', 'marca_id', '=', 'marca.id')
            ->select('produto.id','produto.nome','produto.descricao','produto.tensao','marca.id as marca_id','marca.nome as marca')
            ->get();

        }   
        
        return $resultado;
    }
}

