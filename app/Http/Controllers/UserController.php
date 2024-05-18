<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use Inertia\Inertia;
use Illuminate\Support\Str;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::query();
        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
        if (request("name")) {
            $query->where("name", "LIKE", "%" . request("name") . "%");
        }
        if (request("email")) {
            $query->where("email", "LIKE", "%" . request("email") . "%");
            // $query->where("status", request("status"));
        }

        $users = $query->orderBy($sortField, $sortDirection)->paginate(5);
        // $users = $query->paginate(10)->onEachSide(1);
        return Inertia::render('User/Index', [
            'users' => UserResource::collection($users),
            'queryParams' => request()->query() ? : null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile  */
        $image = $data['image'] ?? null;
        dd($data);
        if ($image) {
            $data['image_path'] = $image->store('user/'. Str::random(), 'public');
        }
        User::create($data);
        return to_route('user.index')->with('success', 'Project created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
