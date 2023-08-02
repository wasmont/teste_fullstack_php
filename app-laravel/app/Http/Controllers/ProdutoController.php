<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ProdutoService;
use App\Http\Requests\ProdutoStoreRequest;
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
        
        return response()->json($resultado, $resultado['status']);
    }

    /**
    * Save the specified resource in storage.
    *
    * @param  ProdutoStoreRequest  $request
    * @return Response
    */
    public function store(ProdutoStoreRequest $request)
    {
        $resultado = ['status' => 200];
        
        try {
            $resultado['data'] = $this->produtoService->saveProdutoData($request->validated());
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel adicionar o registro!"];
        }
        
        return response()->json($resultado, $resultado['status']);
    }

    /**
    * Update the specified resource in storage.
    *
    * @param  ProdutoStoreRequest $request
    * @return Response
    */
    public function update(ProdutoStoreRequest $request)
    {
        $resultado = ['status' => 200];
        $data = ($request->validated()) ? $request : [];

        try {
            $resultado['data'] = $this->produtoService->updateProduto($data);
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel atualizar o registro!"];
        }
        
        return response()->json($resultado, $resultado['status']);
    }
    public function destroy(int $id)
    {
        $resultado = ['status' => 204];
        
        try {
            $resultado['data'] = $this->produtoService->removerProduto($id);
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel remover o registro!"];
        }
        
        return response()->json($resultado, $resultado['status']);
    }

    public function getMarcas()
    {
        $resultado = ['status' => 200];
        
        try {
            $resultado['data'] = $this->marcaRepository->getMarcas();
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel encontrar Marca!"];
        }
        
        return response()->json($resultado, $resultado['status']);
    }

}
