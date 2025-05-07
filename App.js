
import React from 'react';
import { Card, CardContent, Button } from '@/components/ui/card';
import { ShoppingCart, Info } from 'lucide-react';

const HomePage = () => {
    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-4'>Welcome to Bader's Supplement E-Store</h1>
            <p>Find the best supplements for your health and fitness journey!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                <Card>
                    <CardContent>
                        <h2 className='text-xl font-semibold'>Shop Supplements</h2>
                        <p>Browse our wide range of health supplements.</p>
                        <Button variant='outline' className='mt-2'><ShoppingCart className='mr-2'/>Shop Now</Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <h2 className='text-xl font-semibold'>Get Advice</h2>
                        <p>Personalized fitness and nutrition advice.</p>
                        <Button variant='outline' className='mt-2'><Info className='mr-2'/>Learn More</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default HomePage;
