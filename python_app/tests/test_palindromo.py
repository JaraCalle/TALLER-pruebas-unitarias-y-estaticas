from python_app.palindromo import es_palindromo

def test_radar_is_palidrome():
    assert es_palindromo("radar")

def test_anita_is_palidrome():
    assert es_palindromo("anita lava la tina")

def test_python_isnt_palidrome():
    assert not es_palindromo("python")

def test_anita_is_palidrome():
    assert es_palindromo("anita lava la tina")

def test_empty_is_palidrome():
    assert es_palindromo("")

def test_Radar_is_palidrome():
    assert es_palindromo("Radar")
