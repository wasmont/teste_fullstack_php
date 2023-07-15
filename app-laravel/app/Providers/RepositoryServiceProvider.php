<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\ProdutoRepositoryInterface;
use App\Repositories\ProdutoRepository;
use App\Interfaces\MarcaRepositoryInterface;
use App\Repositories\MarcaRepository;
class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(ProdutoRepositoryInterface::class, ProdutoRepository::class);
        $this->app->bind(MarcaRepositoryInterface::class, MarcaRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
