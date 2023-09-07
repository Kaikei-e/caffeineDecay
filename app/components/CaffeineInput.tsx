'use client';
import React from 'react';
import {useForm} from 'react-hook-form';

export const CaffeineInput: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center p-5 bg-gray-100 rounded-lg">
            <div className="flex flex-col mb-5">
                <label htmlFor="caffeineAmount" className="text-lg font-bold mb-2">Caffeine Amount (mg):</label>
                <input
                    type="number"
                    id="caffeineAmount"
                    placeholder="Enter caffeine amount"
                    {...register('caffeineAmount', {
                        valueAsNumber: true,
                        required: "Required",
                        min: {value: 0, message: "Must be greater than 0"},
                        max: {value: 1000, message: "Must be less than 1000"},
                    })}
                    className={`p-2 rounded border ${errors.caffeineAmount ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.caffeineAmount &&
                    <span className="text-red-500 text-xs">{errors.caffeineAmount.message as string}</span>}
            </div>
            <button type="submit"
                    className="px-4 py-2 rounded text-white bg-indigo-400 hover:bg-blue-300 hover:text-black">Calculate
            </button>
        </form>
    );
};
