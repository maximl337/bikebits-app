<?php

namespace App\Http\Controllers;

use Response;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{

    /**
     * Default status code 
     * 
     * @var integer
     */
    protected $statusCode = 200;

    /**
     * Set the response status code
     * 
     * @param int $statusCode
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;

        return $this;
    }

    /**
     * Get the response statuscode
     * 
     * @return int
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * Return respond not found
     * 
     * @param  string $message Custom message
     * @return \Illuminate\Http\Response
     */
    public function respondNotFound($message = 'Not Found')
    {
        return $this->setStatusCode(404)->respondWithError($message);
       
    }

    /**
     * Return Internal error
     * 
     * @param  string $message Custom message
     * @return \Illuminate\Http\Response
     */
    public function respondInternalError($message = 'Internal Error')
    {
        return $this->setStatusCode(500)->respondWithError($message);
       
    }

    /**
     * Default response 200 OK
     * 
     * @param  [,] $data    Response data
     * @param  array  $headers Custom headers
     * @return \Illuminate\Http\Response
     */
    public function respond($data, $headers = [])
    {
        return Response::json($data, $this->getStatusCode(), $headers);
    }

    /**
     * Respond with custom error
     * 
     * @param  string $message Custom message
     * @return \Illuminate\Http\Response
     */
    public function respondWithError($message)
    {
        return $this->respond([
                'error' => [

                    'message' => $message,

                    'status_code' => $this->getStatusCode()

                ]
            ]);
    }

    /**
     * Respond with custom error indicating field
     *
     * @param  string $message Custom message
     * @return \Illuminate\Http\Response
     */
    public function respondWithErrorAndAffectedField($message, $field, $wrongValue)
    {
        return $this->respond([
            'error' => [

                'message' => [$field=>[$message]],

                'status_code' => $this->getStatusCode(),

                'wrong value' => $wrongValue

            ]
        ]);
    }

    /**
     * Respond resource created
     * 
     * @param  string $message Custom message
     * @param  array  $data    Additional data
     * @return \Illuminate\Http\Response
     */
    public function respondCreated($message = 'Created', $data = [])
    {
        return $this->setStatusCode(201)
                    ->respond([
                            'message' => $message,
                            'data' => $data
                        ]);
    }

    /**
     * Response validation error
     * 
     * @param  string $message Custom message
     * @return \Illuminate\Http\Response
     */
    public function respondValidationError($message = 'Parameters failed validation')
    {
        return $this->setStatusCode(422)->respondWithError($message);
    }


    /**
     * Response unauthorized
     * 
     * @param  string $message Custom message
     * @return \Illuminate\Http\Response
     */
    public function respondNotAuthorized($message = 'Not authorized')
    {
        return $this->setStatusCode(401)->respondWithError($message);
    }

    /**
     * Respond forbidden access
     * 
     * @param  string $message Custom message
     * @return \Illuminate\Http\Response
     */
    public function respondForbidden($message = 'Request Forbidden')
    {
        return $this->setStatusCode(403)->respondWithError($message);
    }

    /**
     * Deep encode collections and arrays
     * 
     * @param  [type] &$input [description]
     * @return [type]         [description]
     */
    public function utf8_encode_deep(&$input) {

        if (is_string($input)) {
            $input = utf8_encode($input);
        } else if (is_array($input)) {
            foreach ($input as &$value) {
                self::utf8_encode_deep($value);
            }

            unset($value);
        } else if (is_object($input)) {
            $vars = array_keys(get_object_vars($input));
            foreach ($vars as $var) {
                self::utf8_encode_deep($input->$var);
            }
        }

        return $input;
    }

    public function respondFormError($globalErrors = [], $fieldErrors = []) {
        return $this->setStatusCode(422)->respond([
            'global_errors' => $globalErrors,
            'field_errors' => $fieldErrors
        ]);
    }
}