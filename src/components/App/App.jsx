import React, { useState, useEffect } from 'react';
import LineChart from '../../shared/LineChart';
import AppContainer from '../AppContainer/';
import ShoppingList from '../ShoppingList';
import AppHeader from '../AppHeader';
import { Container, Wrapper } from './App.styles';

import productsMock from '../../mocks/productsList.json';

function App() {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const [products, setProducts] = useState(productsMock.products);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked);

        setSelectedProducts(newSelectedProducts);
    }, [products]);

    function handleToggle(id, checked, name) {
        const newProducts = products.map(product =>
            product.id === id
                ? { ...product, checked: !product.checked }
                : product
        )
        setProducts(newProducts);
    }

    return (
        <Wrapper>
            <Container>
                <AppHeader />
                <AppContainer
                    left={
                        <ShoppingList
                            title='produtos disponíveis'
                            products={products}
                            onToggle={handleToggle}
                        />
                    }
                    middle={
                        <ShoppingList
                            title='lista de compras'
                            products={selectedProducts}
                            onToggle={handleToggle}

                        />
                    }
                    right={
                        <div>
                            estatísticas

                            <LineChart color={colors[0]} title='Saudável' percentage={30} />
                            <LineChart color={colors[1]} title='Não tão Saudável' percentage={20} />
                            <LineChart color={colors[2]} title='Limpeza' percentage={35} />
                            <LineChart color={colors[3]} title='Outros' percentage={15} />

                        </div>

                    }
                />
            </Container>
        </Wrapper>
    )
}
export default App