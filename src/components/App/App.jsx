import React, { useState, useEffect } from 'react';
import LineChart from '../../shared/LineChart';
import AppContainer from '../AppContainer/';
import ShoppingList from '../ShoppingList';
import AppHeader from '../AppHeader';
import { Container, Wrapper } from './App.styles';

import productsMock from '../../mocks/productsList.json';
import extractPercentage from '../../utils/extractPercentage';

function App() {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const [products, setProducts] = useState(productsMock.products);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalPrices, setTotalPrices] = useState(0);

    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked);
        setSelectedProducts(newSelectedProducts);
    }, [products]);

    useEffect(() => {
        const newTotalPrices = selectedProducts
            .map(product => product.price)
            .reduce((acc, curr) => acc + curr, 0);
        setTotalPrices(newTotalPrices);
    }, [selectedProducts]);

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

                            <LineChart
                                color={colors[0]}
                                title='saudável'
                                percentage={extractPercentage(
                                    selectedProducts.length,
                                    selectedProducts
                                        .filter(product =>
                                            product.tags.includes('healthy')).length)
                                }
                            />
                            <LineChart
                                color={colors[1]}
                                title='não tão saudável'
                                percentage={extractPercentage(
                                    selectedProducts.length,
                                    selectedProducts
                                        .filter(product =>
                                            product.tags.includes('junk')).length)
                                }
                            />
                            <LineChart
                                color={colors[2]}
                                title='limpeza'
                                percentage={extractPercentage(
                                    selectedProducts.length,
                                    selectedProducts
                                        .filter(product =>
                                            product.tags.includes('cleaning')).length)
                                }
                            />
                            <LineChart
                                color={colors[3]}
                                title='Outros'
                                percentage={extractPercentage(
                                    selectedProducts.length,
                                    selectedProducts
                                        .filter(product =>
                                            product.tags.includes('others')).length)
                                }
                            />
                            <div style={{ marginTop: 12 }}>
                                <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364a' }}>
                                    previsão de gastos :
                                </h2>

                                <div style={{ fontSize: 24 }}>
                                    {totalPrices.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </div>

                            </div>

                        </div>
                    }
                />
            </Container>
        </Wrapper>
    )
}
export default App