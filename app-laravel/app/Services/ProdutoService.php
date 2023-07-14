<?php 

namespace App\Services;

use App\Repositories\ProdutoRepository;
use Illuminate\Support\Facades\Validator;
use App\Interfaces\ProdutoRepositoryInterface;

class ProdutoService implements ProdutoRepositoryInterface {

    protected $produtoRepository;
    public function __construct(ProdutoRepository $produtoRepository) {
        $this->produtoRepository = $produtoRepository;
    }
    public function saveProdutoData($data) {

        $validator = Validator::make($data, [
            'nome' => 'required|unique:produto,nome,NULL,id,marca_id,'.$data['marca_id'],
            'descricao' => 'required',
            'tensao' => 'required',
            'marca_id'=> 'required'
        ]);

        if($validator->fails())
            throw new \InvalidArgumentException($validator->erros()->first());

        $resultado = $this->produtoRepository->save($data);

        return $resultado;
    }
    public function updateProduto($data) {

        $validator = Validator::make($data, [
            'nome' => 'required|unique:produto,nome,NULL,id,marca_id,'.$data['marca_id'],
            'descricao' => 'required',
            'tensao' => 'required',
            'marca_id'=> 'required'
        ]);

        if($validator->fails())
            throw new \InvalidArgumentException($validator->erros()->first());

        $resultado = $this->produtoRepository->update($data);

        return $resultado;
    }
    public function removerProduto($id) {

        $resultado = $this->produtoRepository->delete($id);
        return $resultado;
    }    

    
}
