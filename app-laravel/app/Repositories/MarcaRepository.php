<?php 

declare(strict_types=1);

namespace App\Repositories;

use App\Models\MarcaModel;
use App\Interfaces\MarcaRepositoryInterface;

class MarcaRepository implements MarcaRepositoryInterface {
    protected object $marca;

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

