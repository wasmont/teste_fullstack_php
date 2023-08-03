<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProdutoStoreRequest;
use App\Interfaces\{MarcaRepositoryInterface, ProdutoRepositoryInterface};
class ProdutoController extends Controller
{
    protected $produtoRepository;
    protected $marcaRepository;
    public function __construct(ProdutoRepositoryInterface $produtoRepository, MarcaRepositoryInterface $marcaRepository) {
        $this->produtoRepository = $produtoRepository;
        $this->marcaRepository = $marcaRepository;
    }
    public function getProduct($id = null)
    {
        $resultado = ['status' => 200];
        
        try {
            $resultado['data'] = $this->produtoRepository->getProduto($id);
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
            $resultado['data'] = $this->produtoRepository->save($request->validated());
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
            $resultado['data'] = $this->produtoRepository->update($data);
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => "Nao foi possivel atualizar o registro!"];
        }
        
        return response()->json($resultado, $resultado['status']);
    }
    public function destroy(int $id)
    {
        $resultado = ['status' => 204];
        
        try {
            $resultado['data'] = $this->produtoRepository->delete($id);
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