import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const serviceList = [
  {
    id: "infrastructure",
    title: "Infraestrutura",
    description:
      "Arquitetura de servidores robusta, alta disponibilidade e otimização de ambientes de TI.",
  },
  {
    id: "support",
    title: "Suporte Técnico",
    description:
      "Atendimento especializado multicanal, resolução rápida de incidentes e monitoramento proativo.",
  },
  {
    id: "cloud",
    title: "Cloud",
    description:
      "Migração segura para a nuvem, gestão de ambientes multi-cloud e escalabilidade elástica.",
  },
  {
    id: "security",
    title: "Segurança",
    description:
      "Proteção avançada de dados, conformidade, auditorias de vulnerabilidade e firewalls geridos.",
  },
];

export default function Services() {
  const location = useLocation();
  const isRootServices = location.pathname === "/services";

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Nossos Serviços
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Soluções tecnológicas corporativas focadas em performance, segurança e
          inovação para o seu ecossistema digital.
        </p>
      </div>

      {/* Se estiver na rota raiz /services, exibe os cards de navegação */}
      {isRootServices ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6 p-3 bg-blue-50 w-fit rounded-lg group-hover:bg-blue-100 transition-colors">
                  icon placeholder
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <span className="mt-6 text-sm font-semibold text-blue-600 flex items-center gap-1">
                Saiba mais &rarr;
              </span>
            </Link>
          ))}
        </div>
      ) : (
        /* Renderiza o conteúdo da subrota ativa via Outlet */
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <Link
            to="/services"
            className="text-sm text-blue-600 font-medium hover:underline mb-6 inline-block"
          >
            &larr; Voltar para todos os serviços
          </Link>
          <Outlet />
        </div>
      )}
    </div>
  );
}

export function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceList.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Serviço não encontrado
        </h2>
        <Link
          to="/services"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Ver todos os serviços
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
      <p className="mt-3 leading-relaxed text-gray-600">
        {service.description}
      </p>
    </div>
  );
}
