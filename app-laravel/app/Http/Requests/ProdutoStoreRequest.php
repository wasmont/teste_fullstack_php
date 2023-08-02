<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class ProdutoStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nome' => Rule::unique('produto')->where(function ($query) {
                    return $query
                        ->whereNome($this->nome)
                        ->where('marca_id', $this->marca_id)
                        ->where('tensao', $this->tensao);
            }),//'string|required|unique:produto,nome,NULL,id,marca_id,'.$this->marca_id,
            'descricao' => 'string|required',
            'tensao' => 'string|required',
            'marca_id'=> 'integer|required'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'nome.required' => 'O campo nome e obrigatorio',
            'nome.unique' => 'O item ja existe',
            'descricao.required' => 'O campo descricao e obrigatorio',
            'tensao.required' => 'O campo tensao e obrigatorio',
            'marca_id.required' => 'O campo marca_id e obrigatorio',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        if($this->wantsJson()) {

            $response = response()->json([
                'success' => false,
                'message' => "It's not a valid json, check the Header Request",
                'errors' => $validator->errors()
            ],401);        

        } else {

            $response = response()->json([
                'success' => false,
                'message' => 'Ops! Some errors occurred',
                'errors' => $validator->errors()
            ],401);        

        }
            
        throw (new ValidationException($validator, $response))
            ->errorBag($this->errorBag)
            ->redirectTo($this->getRedirectUrl());

    }
}