<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'due_date', 'status', 'priority', 'image_path', 'project_id', 'assigned_user_id', 'created_by_id', 'updated_by_id'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
    // public function tasks()
    // {
    //     return $this->belongsToMany(User::class, 'task_assigned_users', 'task_id', 'user_id');
    // }

    public function assignedUser()
    {
        return $this->belongsTo(User::class, 'assigned_user_id');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
