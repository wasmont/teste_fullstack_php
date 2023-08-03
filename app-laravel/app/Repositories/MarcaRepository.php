<?php 

namespace App\Repositories;

use App\Models\MarcaModel;
use Illuminate\Support\Facades\DB;
use App\Interfaces\MarcaRepositoryInterface;

class MarcaRepository implements MarcaRepositoryInterface {
    protected $marca;

    public function __construct(MarcaModel $marca){
        $this->marca = $marca;
    }
    public function getMarcas() : object
    {
        return $this->marca
        ->select('marca.*')
        ->orderBy('marca.nome', 'asc')
        ->get();
    }
}

