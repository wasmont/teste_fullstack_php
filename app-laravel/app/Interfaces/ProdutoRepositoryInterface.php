<?php

namespace App\Interfaces;

interface ProdutoRepositoryInterface 
{

    public function save(array $data) : object;
    public function update(object $data) : object;
    public function delete(int $id) : bool;
    public function getProduto(int $id = null) : object;
    
}