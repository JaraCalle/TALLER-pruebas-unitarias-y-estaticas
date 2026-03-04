from python_app.utils import suma

def test_2_3_equals_5():
    assert suma(2,3) == 5

def test_0_5_equals_5():
    assert suma(0,5) == 5

def test_minus2_3_equals_1():
    assert suma(-2,3) == 1
