import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext } from "react";
import { todocontext } from "../Wrapper";

const CreateTodo = () => {
  // const [title, setTitle] = useState("");

  const [todos, setTodos] = useContext(todocontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    console.log(data);

    // if (title === "") {
    //   alert("Please enter a title");
    //   return;
    // }
    // if (todos.some((todo) => todo.title === title)) {
    //   alert("Todo already exists");
    //   return;
    // }

    // const copyTodos = [...todos];
    // copyTodos.push(newTodo);
    // settodos(copyTodos);
    setTodos((prev) => [...prev, data]);

    toast.success("Todo created successfully");

    reset();

    // setTitle("");
  };

  return (
    <Fragment>
      <div className=" w-[60%] p-10 ">
        <h1 className="mb-10 text-5xl font-thin">
          Set <span className="text-red-400">Reminders</span> for <br /> tasks
        </h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <input
            {...register("title", {
              required: true,
              minLength: 3,
            })}
            className="p-2 border-b w-full text-2xl font-thin outline-0"
            type="text"
            placeholder="title"
          />
          {errors.title?.type === "required" && (
            <p className="text-red-500 mt-2 ml-1">Title is required</p>
          )}
          {errors.title?.type === "minLength" && (
            <p className="text-red-500 mt-2 ml-1">
              Title must be at least 3 characters
            </p>
          )}
          <br />
          <br />
          <button className="mt-5 text-xl px-10 py-2 border rounded">
            Create Todo
          </button>{" "}
        </form>
      </div>
    </Fragment>
  );
};

export default CreateTodo;
