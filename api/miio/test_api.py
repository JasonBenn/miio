from miio.utils import roundrobin


def test_answer():
    assert roundrobin('ABC', 'D', 'EF') == ["A", "D", "E", "B", "F", "C"]
