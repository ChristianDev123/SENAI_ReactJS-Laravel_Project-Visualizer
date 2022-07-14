<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    public function images(){
        return $this->hasMany("App\Models\Image");
    }
    
    public function videos(){
        return $this->hasMany("App\Models\Video");
    }
    
    protected $guarded = [];
    
}
