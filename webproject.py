import requests
import streamlit as st
import qrcode
from io import BytesIO
from streamlit_lottie import st_lottie

# Set page configuration
st.set_page_config(page_title="Link to QR code converter", page_icon=":tada:", layout="wide")

# Function to load Lottie animations
def load_lottieurl(url):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()

# Function to apply local CSS
def local_css(file_name):
    with open(file_name) as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

# Load local CSS
local_css("style/style.css")

# Load the Lottie animation
lottie_coding = load_lottieurl("https://lottie.host/f985ded8-e1b2-45a0-b493-019428ca0749/8GKikrykyZ.json")

# Header Section
with st.container():
    st.markdown("<header><h1>Link to QR Code Converter</h1><h2>Convert any URL to a QR code in seconds!</h2></header>", unsafe_allow_html=True)

# Content Section
with st.container():
    st.subheader("Welcome to the Link to QR code converter website:")
    st.title("Link to QR Code Converter")
    st.write("Enter a website link to generate your QR code. Click 'Generate QR Code' to create it.")

# QR Code Generation Logic
def generate_qr_code(link):
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(link)
    qr.make(fit=True)

    img = qr.make_image(fill='black', back_color='white')
    
    img_byte_arr = BytesIO()
    img.save(img_byte_arr)
    img_byte_arr.seek(0)
    return img_byte_arr

# QR Code Input Form and Display
with st.container():
    st.write("---")
    st.header("Add the link over here")
    
    # Input field for URL
    link = st.text_input("Enter the URL here:", placeholder="Enter a link (e.g., www.example.com)")

    # Button to generate the QR code
    if st.button("Generate QR Code"):
        if link:
            # Generate QR code if a link is provided
            qr_code_img = generate_qr_code(link)
            
            # Display the QR code with a medium size (300px width)
            st.image(qr_code_img, caption="Your generated QR code", use_column_width=False, width=300)
            
            # Provide download button for the QR code image
            st.download_button(
                label="Download QR Code",
                data=qr_code_img,
                file_name="qr_code.png",
                mime="image/png"
            )
        else:
            st.error("Please enter a valid URL before generating the QR code.")
