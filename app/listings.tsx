import { useState } from 'react';

export default function Listings() {
  const [formData, setFormData] = useState({
    name: '',
    governmentID: '',
    proofOfResidence: '',
    videoLink: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submitListing', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      if(response.status === 200) {
        alert('Submission successful!');
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {/* ... header ... */}

      <section>
        <h2>Offer Your Home</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label><br />
          <label>
            Government ID:
            <input type="text" name="governmentID" value={formData.governmentID} onChange={handleChange} required />
          </label><br />
          <label>
            Proof of Residence:
            <input type="text" name="proofOfResidence" value={formData.proofOfResidence} onChange={handleChange} required />
          </label><br />
          <label>
            Video Explanation (Loom/YouTube link):
            <input type="url" name="videoLink" value={formData.videoLink} onChange={handleChange} required />
          </label><br />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* ... footer ... */}
    </div>
  );
}