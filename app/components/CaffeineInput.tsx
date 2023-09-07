"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { caffeineAtom } from "@/app/jotais/caffeine";

export const CaffeineInput: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [currentDateTime, setCurrentDateTime] = useState<string>("");
  const [caffeineAmount, setCaffeineAmount] = useAtom(caffeineAtom);
  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const dateTimeString = `${year}-${month}-${day}T${hours}:${minutes}`;

    setCurrentDateTime(dateTimeString);
    setCaffeineAmount({
      consumedDateTime: dateTimeString,
      caffeineAmount: 0,
    });
  }, [setCaffeineAmount]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center p-5 bg-gray-100 rounded-lg"
    >
      <div className="flex flex-col mb-5">
        <label htmlFor="caffeineTime" className="text-lg font-bold mb-2">
          Time Consumed:
        </label>
        <input
          type="datetime-local"
          id="caffeineTime"
          {...register("caffeineTime", {
            required: "Required",
          })}
          value={currentDateTime}
          className={`p-2 rounded border ${
            errors.caffeineTime ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.caffeineTime && (
          <span className="text-red-500 text-xs">
            {errors.caffeineTime.message as string}
          </span>
        )}
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="caffeineAmount" className="text-lg font-bold mb-2">
          Caffeine Amount (mg):
        </label>
        <input
          type="number"
          id="caffeineAmount"
          placeholder="Enter caffeine amount"
          {...register("caffeineAmount", {
            valueAsNumber: true,
            required: "Required",
            min: { value: 0, message: "Must be greater than 0" },
            max: { value: 1000, message: "Must be less than 1000" },
          })}
          className={`p-2 rounded border ${
            errors.caffeineAmount ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.caffeineAmount && (
          <span className="text-red-500 text-xs">
            {errors.caffeineAmount.message as string}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-2 rounded text-white bg-indigo-400 hover:bg-blue-300 hover:text-black"
        onClick={() => {
          setCaffeineAmount({
            consumedDateTime: currentDateTime,
            caffeineAmount: 0,
          });
        }}
      >
        Calculate
      </button>
    </form>
  );
};
