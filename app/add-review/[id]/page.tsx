import Form from '@/app/components/ReviewForm';

export default async function AddReview(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    return (
<Form productId={id} />
    )
}