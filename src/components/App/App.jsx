import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Wrapper } from './App.styles';

import LineChart from '../../shared/LineChart';

import AppContainer from '../AppContainer/';
import ShoppingList from '../ShoppingList';
import AppHeader from '../AppHeader';
import Calculator from '../Calculator';

import extractPercentage from '../../utils/extractPercentage';

import { selectAllProducts, selectSelectedProducts, selectSelectedProductTotalPrice } from '../../store/Products/Products.selectors';
import { toogleProduct } from '../../store/Products/Products.actions';

function App() {
    const dispatch = useDispatch();
    
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const products = useSelector(selectAllProducts)
    const selectedProducts = useSelector(selectSelectedProducts)
    const totalPrices = useSelector(selectSelectedProductTotalPrice)
    

    function handleToggle(id) {
        dispatch(toogleProduct(id));
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
                                <Calculator />
                            </div>
                        </div>
                    }
                />
            </Container>
        </Wrapper>
    )
}
export default App