<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ProdutoService;
class ProdutoController extends Controller
{
    protected $produtoService;
    public function __construct(ProdutoService $produtoService) {
        $this->produtoService = $produtoService;
    }
    public function store(Request $request)
    {
        $resultado = ['status' => 200];

        $data = $request->only(['nome','descricao','tensao','marca_id']);
        
        try {
            $resultado['data'] = $this->produtoService->saveProdutoData($data);
        } catch (\Exception $e) {
            $resultado = ['status' => 401, 'error' => $e->getMessage()];
        }
        
        return response()->json($resultado);
    }
}
