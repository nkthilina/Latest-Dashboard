<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $totalPendingTasks = Task::query()->where('status', 'pending')->count();
        $myPendingTasks = Task::query()->where('status', 'pending')->where('assigned_user_id', $user->id)->count();

        $totalInProgressTasks = Task::query()->where('status', 'in_progress')->count();
        $myInProgressTasks = Task::query()->where('status', 'in_progress')->where('assigned_user_id', $user->id)->count();

        $totalCompletedTasks = Task::query()->where('status', 'completed')->count();
        $myCompletedTasks = Task::query()->where('status', 'completed')->where('assigned_user_id', $user->id)->count();

        $myTasks = Task::query()->where('assigned_user_id', $user->id)->count();

        return Inertia::render('Dashboard', compact(
            'totalPendingTasks',
            'myPendingTasks',
            'totalInProgressTasks',
            'myInProgressTasks',
            'totalCompletedTasks',
            'myCompletedTasks',
            'myTasks'
        ));
    }
}
