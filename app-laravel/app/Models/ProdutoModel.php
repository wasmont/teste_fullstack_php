<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProdutoModel extends Model
{
    use HasFactory;
    protected $table = 'produto';
    public $timestamps = true;
    protected $hidden = ['created_at','updated_at'];
    protected $fillable = ['id','nome','descricao','tensao','created_at','updated_at','marca_id'];
}
