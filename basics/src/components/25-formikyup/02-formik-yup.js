import React from 'react'
import { Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';

const FormikYup2 = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    const validationSchema = yup.object({
        firstName: yup.string()
            .min(2, "Isim en az 2 karakter olmalidir!")
            .required("Isim kismini bos birakamazsiniz!"),
        lastName: yup.string()
            .min(2, "Soyisim en az 2 karakter olmalidir!")
            .required("Soyisim kismini bos birakamazsiniz!"),
        email: yup.string()
            .email("Gecerli bir email adresi giriniz!")
            .required("Email kismini bos birakamazsiniz!"),
        password: yup.string()
            .min(6, "Sifre en az 6 karakter olmalidir!")
            .max(15, "Sifre en fazla 15 karakter olmalidir!")
            .required("Sifre kismini bos birakamazsiniz!"),
    });

    const onSubmit = (values) => {
        console.log("Form data:", values)
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    })


    return (
        <Container>
            <h2>Formik & Yup — 2</h2>
            <p>*Doldurulmasi zorunlu alanlar.</p>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control
                        type='text'
                        name='firstName'
                        placeholder="Lutfen isminizi giriniz..."
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.firstName && !formik.errors.firstName}
                        isInvalid={formik.touched.firstName && formik.errors.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default FormikYup2