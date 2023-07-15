<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ProdutoService;
use App\Interfaces\MarcaRepositoryInterface;
class ProdutoController extends Controller
{
    protected $produtoService;
    protected $marcaRepository;
    public function __construct(ProdutoService $produtoService, MarcaRepositoryInterface $marcaRepository) {
        $this->produtoService = $produtoService;
        $this->marcaRepository = $marcaRepository;
    }
    public function getProduct($id = null)
    {
        $resultado = ['status' => 200];
        
        try {
            $resultado['data'] = $this->produtoService->getProduto($id);
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel encontrar Produto!"];
        }
        
        return response()->json($resultado);
    }

    /**
    * Save the specified resource in storage.
    *
    * @param  Request  $request
    * @return Response
    */
    public function store(Request $request)
    {
        $resultado = ['status' => 200];

        $data = $request->only(['nome','descricao','tensao','marca_id']);
        
        try {
            $resultado['data'] = $this->produtoService->saveProdutoData($data);
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel adicionar o registro!"];
        }
        
        return response()->json($resultado);
    }

    /**
    * Update the specified resource in storage.
    *
    * @param  Request $request
    * @return Response
    */
    public function update(Request $request)
    {
        $resultado = ['status' => 200];

        $data = $request->only(['id','nome','descricao','tensao','marca_id']);
        
        try {
            $resultado['data'] = $this->produtoService->updateProduto($data);
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel atualizar o registro!"];
        }
        
        return response()->json($resultado);
    }
    public function destroy(int $id)
    {
        $resultado = ['status' => 204];
        
        try {
            $resultado['data'] = $this->produtoService->removerProduto($id);
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel remover o registro!"];
        }
        
        return response()->json($resultado);
    }

    public function getMarcas()
    {
        $resultado = ['status' => 200];
        
        try {
            $resultado['data'] = $this->marcaRepository->getMarcas();
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel encontrar Marca!"];
        }
        
        return response()->json($resultado);
    }

}
