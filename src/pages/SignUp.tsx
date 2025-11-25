import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="text-3xl font-['Pacifico'] text-primary">
              EaseVote
            </Link>
            <h1 className="text-2xl font-heading text-gray-900 mt-4">Create account</h1>
            <p className="text-gray-600 mt-1">Join EaseVote today</p>
          </div>

          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 border-gray-200 focus:border-primary"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 border-gray-200 focus:border-primary"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
              <div className="mt-2 relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  className="pr-10 border-gray-200 focus:border-primary"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium"
            >
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-primary hover:text-primary/80 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:flex flex-1">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1200&fit=crop"
          alt="Event"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}