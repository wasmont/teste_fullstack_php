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
    public function getProduto($id) {
        return $this->produtoRepository->getProduto($id);
    }    
    public function saveProdutoData($data) {
        return $this->produtoRepository->save($data);
    }
    public function updateProduto($data) {
        return $this->produtoRepository->update($data);
    }
    public function removerProduto($id) {
        return $this->produtoRepository->delete($id);
    }    
       
}