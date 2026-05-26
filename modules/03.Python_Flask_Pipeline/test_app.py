import pytest


from app import app


@pytest.fixture
def client():
    # Create a test client using Flask's test client
    with app.test_client() as client:
        yield client


def test_home_route(client):
    # Test the home route
    response = client.get('/')
    assert response.status_code == 200  # Check that the request was successful
    json_data = response.get_json()
    assert json_data['message'] == "Hello, World!"  # Validate response content
