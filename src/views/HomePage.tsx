import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


const listInput = {
    inputs: [
        {
            label: 'First Name',
            name: 'firstName',
            type: 'text',
            placeholder: 'Please fill first name'
        },
        {
            label: 'Last Name',
            name: 'lastName',
            type: 'text',
            placeholder: 'Please fill last name'
        },
        {
            label: 'E-mail',
            name: 'email',
            type: 'email',
            placeholder: 'Please fill email'
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Please fill password'
        },
        {
            label: 'Verify Password',
            name: 'verifyPassword',
            type: 'password',
            placeholder: 'Please fill verify password'
        },
        {
            label: 'Gender',
            name: 'gender',
            type: 'text',
            placeholder: 'Please fill gender'
        },

    ]
}

const schema = yup.object().shape({
    firstName: yup.string().required("Please fill out this field."),
    lastName: yup.string().required("Please fill out this field."),
    email: yup.string().required("Please fill out this field.").email(),
    password: yup.string().required("Please fill out this field.")
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    verifyPassword: yup.string().required("Please fill out this field.")
        .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
    gender: yup.string().required("Please fill out this field."),
});

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    passWord: string;
    verifyPassWord: string;
    gender: string;
};

const HomePage = () => {
    const [data, setData] = useState<FormValues>();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = handleSubmit((data: FormValues) => {
        console.log(data)
        setData(data)
    });
    console.log(errors)
    return (
        <div className="row mt-4">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card mb-5" style={{ background: "#CBD5E0" }}>
                    <form onSubmit={onSubmit} className="p-5">
                        <h4 className="text-center">Test form and validation</h4>
                        <div className="mb-3 mt-3">
                            {listInput.inputs.map((input, key) => {

                                return input.label === "Gender" ? <>
                                    <div className="row" key={key}>
                                        <div className="col-3">
                                            <p className="text-md-end pt-1">{input.label}</p>
                                        </div>
                                        <div className="col-8">
                                            <select className="form-control" {...register(input.name)}>
                                                <option selected value="">Please select a gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                            {errors[input.name]?.message && <p className="text-danger">{errors[input.name].message}</p>}
                                        </div>
                                    </div>
                                </> : <>
                                    <div className="row" key={key}>
                                        <div className="col-3">
                                            <p className="text-md-end pt-1">{input.label}</p>
                                        </div>
                                        <div className="col-8">
                                            <input
                                                className="form-control"
                                                type={input.type}
                                                {...register(input.name)}
                                                placeholder={input.placeholder}
                                            />
                                            {errors[input.name]?.message && <p className="text-danger">{errors[input.name].message}</p>}
                                        </div>

                                    </div>

                                </>


                            })}
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-8">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </div>

                    </form>




                    {data ?
                        <div className="p-3">
                            <p className="fw-bold">Result:</p>
                            <span>First Name : {data.firstName}</span> <br />
                            <span>Last Name : {data.lastName}</span> <br />
                            <span>E-mail : {data.email}</span> <br />
                            <span>Gender : {data.gender}</span>
                        </div>
                        : null}
                </div>
            </div>
            <div className="col-3"></div>
        </div>

    );
}

export default HomePage;
