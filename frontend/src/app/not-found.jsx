import React from 'react'

const NotFound = () => {
  return (
    <div>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 Not Found</title>
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        @keyframes bounce {\n            0%, 100% {\n                transform: translateY(0);\n            }\n            50% {\n                transform: translateY(-20px);\n            }\n        }\n        .bounce {\n            animation: bounce 0.5s infinite;\n        }\n    "
    }}
  />
  <div className="text-center">
    <h1 className="text-9xl font-bold text-gray-800 bounce">404</h1>
    <p className="mt-4 text-2xl text-gray-600">Oops! Page not found.</p>
    <p className="mt-2 text-gray-500">
      The page you are looking for does not exist.
    </p>
    <a
      href="/"
      className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
    >
      Go Back Home
    </a>
  </div>
</>



    </div>
  )
}

export default NotFound;
