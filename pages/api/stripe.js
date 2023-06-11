const stripe = require('stripe')("sk_test_51NHTjvJw33UDuwX39Bmm1WUHEZz2zsJ6EAC74U1tHs9oerVs2nWrvQ0TDi28qXOeE4pHVYu5iSJlRQBM8f7NzOu400Do1QQBgY");

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
            {shipping_rate: 'shr_1NHoaZJw33UDuwX3p9gUp1zW'},
            {shipping_rate: 'shr_1NHTwfJw33UDuwX3bUSKsve1'},
        ],
        line_items: req.body.map((item) => {
            const img = item.image[0].asset._ref;
            const newImage = img.replace('image-', "https://cdn.sanity.io/images/ahqn7vmu/production/").replace('-webp', '.webp');

            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [newImage]
                    },
                    unit_amount: item.price * 100,
                },
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1,
                },
                quantity: item.quantity
            }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}