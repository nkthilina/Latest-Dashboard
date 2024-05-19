<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCRUDResource;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\Storage;
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
            'users' => UserCRUDResource::collection($users),
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
        $data['password'] = bcrypt($data['password']);
        /** @var $image \Illuminate\Http\UploadedFile  */
        $image = $data['image'] ?? null;
        // dd($data);
        if ($image) {
            $data['image_path'] = $image->store('user/'. Str::random(), 'public');
        }
        User::create($data);
        return to_route('user.index')->with('success', 'User created successfully');
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
        return Inertia::render('User/Edit', [
            'user' => new UserCRUDResource($user),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        $password = $data['password'] ?? null;
        if ($password) {
            $data['password'] = bcrypt($password);
        }
        /** @var $image \Illuminate\Http\UploadedFile  */
        $image = $data['image'] ?? null;
        if ($image) {
            $data['image_path'] = $image->store('user/'. Str::random(), 'public');
        }
        $name = $user->name;
        $user->update($data);
        return to_route('user.index')->with('success', "User \"$name\" updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $name = $user->name;
        $user->delete();
        if ($user->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($user->image_path));
        }
        return to_route('user.index')->with('success', "User \"$name\" deleted successfully");
    }
}
