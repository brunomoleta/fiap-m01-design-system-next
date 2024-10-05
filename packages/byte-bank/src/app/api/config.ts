const ERROR_STATUS_CODE = 500;
const SUCCESS_STATUS_CODE = 200;
const DEFAULT_HEADERS = { "Content-Type": "application/json" };

async function get(response: object): Promise<Response>  {
  try {
    return new Response(JSON.stringify(response), {
      status: SUCCESS_STATUS_CODE,
      headers: DEFAULT_HEADERS,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro no servidor" }), {
      status: ERROR_STATUS_CODE,
      headers: DEFAULT_HEADERS,
    });
  }
}

const request = {
  get,
};

export default request;
